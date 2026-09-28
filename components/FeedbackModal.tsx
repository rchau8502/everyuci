'use client';

import { useState } from 'react';
import { MessageSquarePlus, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface FeedbackModalProps {
  guideTitle?: string;
  guideSlug?: string;
}

export default function FeedbackModal({ guideTitle, guideSlug }: FeedbackModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correction' | 'suggestion' | 'tip'>('correction');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setText('');
      setIsOpen(false);
    }, 2200);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0064a4] transition-colors"
      >
        <MessageSquarePlus className="w-3.5 h-3.5" />
        <span>Report outdated policy or suggest tip</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-md transform rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/10">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {guideTitle ? 'Suggest an Edit / Report Outdated Info' : 'Suggest a Guide or Tip'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <p className="text-base font-bold text-slate-900">Thank you, Anteater!</p>
                <p className="text-xs text-slate-500">
                  Your feedback helps keep everyUCI accurate and up-to-date for all students.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {guideTitle && (
                  <p className="text-xs text-slate-500">
                    Regarding: <strong className="text-slate-700">{guideTitle}</strong>
                  </p>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    What kind of feedback?
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setFeedbackType('correction')}
                      className={`py-1.5 px-2 rounded-xl font-medium border text-center transition-colors ${
                        feedbackType === 'correction'
                          ? 'border-[#0064a4] bg-sky-50 text-[#0064a4]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Outdated Policy
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedbackType('tip')}
                      className={`py-1.5 px-2 rounded-xl font-medium border text-center transition-colors ${
                        feedbackType === 'tip'
                          ? 'border-[#0064a4] bg-sky-50 text-[#0064a4]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Student Tip
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedbackType('suggestion')}
                      className={`py-1.5 px-2 rounded-xl font-medium border text-center transition-colors ${
                        feedbackType === 'suggestion'
                          ? 'border-[#0064a4] bg-sky-50 text-[#0064a4]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      New Topic
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Details or Official UCI Link
                  </label>
                  <textarea
                    rows={4}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="E.g., Registrar updated the drop deadline time or added a new policy page at..."
                    required
                    className="w-full text-xs rounded-xl border border-slate-200 p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0064a4] hover:bg-[#0c2340] rounded-xl transition-colors"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
