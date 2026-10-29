"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { servicesData } from "@/lib/services";
import { Button } from "@/ui/Button";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

const budgetOptions = [
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Exploratory / Unspecified",
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: servicesData[0].slug,
    budget: "$25k – $50k",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company or organization name.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = "Please describe your project or challenge (minimum 15 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic API interaction simulation
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-border-default bg-dark-850 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="h-16 w-16 rounded-full bg-brand-blueMuted text-brand-electric flex items-center justify-center mx-auto border border-brand-electric/30 shadow-glow">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold text-white">
            Demonstration Inquiry Received
          </h3>
          <p className="text-sm sm:text-base text-dark-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. This is a front-end demo submission with client validation. In production, this form connects to our CRM and sends an automated confirmation to <strong className="text-white">{formData.email}</strong>.
          </p>
        </div>

        <div className="rounded-xl bg-dark-900 border border-border-default p-4 text-xs font-mono text-dark-300 max-w-md mx-auto text-left space-y-1">
          <div><span className="text-dark-400">Service:</span> {formData.service}</div>
          <div><span className="text-dark-400">Company:</span> {formData.company}</div>
          <div><span className="text-dark-400">Budget:</span> {formData.budget}</div>
          <div><span className="text-dark-400">Status:</span> Validated & ready for API endpoint</div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              email: "",
              company: "",
              phone: "",
              service: servicesData[0].slug,
              budget: "$25k – $50k",
              message: "",
            });
          }}
          className="text-xs font-mono font-semibold text-brand-electric underline hover:text-brand-electricHover"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
            Full Name <span className="text-brand-electric">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Vikramaditya Rao"
            className={`w-full rounded-xl border bg-dark-900 px-4 py-3 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all ${
              errors.fullName ? "border-rose-500 bg-rose-950/20" : "border-border-default hover:border-brand-electric/50"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="h-3 w-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
            Work Email <span className="text-brand-electric">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="e.g. v.rao@company.com"
            className={`w-full rounded-xl border bg-dark-900 px-4 py-3 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all ${
              errors.email ? "border-rose-500 bg-rose-950/20" : "border-border-default hover:border-brand-electric/50"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
            Company / Organization <span className="text-brand-electric">*</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => {
              setFormData({ ...formData, company: e.target.value });
              if (errors.company) setErrors({ ...errors, company: undefined });
            }}
            placeholder="e.g. Apex Logistics"
            className={`w-full rounded-xl border bg-dark-900 px-4 py-3 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all ${
              errors.company ? "border-rose-500 bg-rose-950/20" : "border-border-default hover:border-brand-electric/50"
            }`}
          />
          {errors.company && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="h-3 w-3" />
              {errors.company}
            </p>
          )}
        </div>

        {/* Phone Number (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
            Phone Number <span className="text-dark-500 font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-border-default bg-dark-900 px-4 py-3 text-sm text-white placeholder:text-dark-500 hover:border-brand-electric/50 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all"
          />
        </div>
      </div>

      {/* Primary Service Required */}
      <div>
        <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
          Service Discipline Required <span className="text-brand-electric">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-xl border border-border-default bg-dark-900 px-4 py-3 text-sm text-white hover:border-brand-electric/50 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all"
        >
          {servicesData.map((s) => (
            <option key={s.slug} value={s.slug} className="bg-dark-900 text-white">
              {s.title} ({s.category})
            </option>
          ))}
        </select>
      </div>

      {/* Estimated Project Budget */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
          Estimated Project Budget <span className="text-dark-500 font-normal">(Optional)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {budgetOptions.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setFormData({ ...formData, budget })}
              className={`px-3 py-2 rounded-xl text-xs font-mono text-left transition-all border ${
                formData.budget === budget
                  ? "border-brand-electric bg-brand-blue text-white font-bold shadow-glow"
                  : "border-border-default bg-dark-900 text-dark-300 hover:border-brand-electric/50"
              }`}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-dark-300 mb-2">
          Project Details & Operational Challenges <span className="text-brand-electric">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Tell us what you're building, existing system bottlenecks, team timeline expectations, or desired technical architecture..."
          className={`w-full rounded-xl border bg-dark-900 p-4 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-brand-electric transition-all ${
            errors.message ? "border-rose-500 bg-rose-950/20" : "border-border-default hover:border-brand-electric/50"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
            <AlertCircle className="h-3 w-3" />
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Transmitting Inquiry...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Project Inquiry
            </span>
          )}
        </Button>
      </div>

      <p className="text-[11px] font-mono text-dark-500 leading-relaxed">
        By submitting, you agree to our standard mutual non-disclosure terms. We never share client specifications with third parties.
      </p>
    </form>
  );
};
