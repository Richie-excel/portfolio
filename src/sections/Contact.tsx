import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";
import { Field } from "../components/Field";
import { CONTACT_INFO } from "@/constants";
import { Socials } from "@/components/Socials";
import { Check } from "lucide-react";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { control, handleSubmit, reset } =
    useForm<ContactFormValues>({
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });

  const onSubmit: SubmitHandler<ContactFormValues> =
    async (data) => {
      console.log(data);

      setSending(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSending(false);
      setSent(true);

      reset();
    };

  return (
    <Section id="contact" className="flex justify-center items-center py-10">
      <div className="container mx-auto px-6">
        <SectionHeader
          tag="Get In Touch"
          title="Contact Me"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-4 py-2">
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              
              <p className="text-slate-400 leading-relaxed">
                Have a project in mind or just want to say hi? 
                I'm always open to discussing new opportunities, 
                collaborations, or even just tech talk.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-200 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    <Icon/>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-slate-200 text-sm font-medium truncate group-hover:text-emerald-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              )})}
            </div>

            {/* Social Links */}
            <Socials text="Connect with me"/>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="text-5xl">
                  <Check/>
                </div>

                <h3 className="text-white font-bold text-xl">
                  Message Sent!
                </h3>

                <p className="text-slate-400 text-sm">
                  Thanks for reaching out.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-sm font-bold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field<ContactFormValues>
                    name="name"
                    label="Name"
                    control={control}
                  />

                  <Field<ContactFormValues>
                    name="email"
                    label="Email"
                    type="email"
                    control={control}
                  />
                </div>

                <Field<ContactFormValues>
                  name="subject"
                  label="Subject"
                  control={control}
                />

                <Field<ContactFormValues>
                  name="message"
                  label="Message"
                  multiline
                  control={control}
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60"
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}