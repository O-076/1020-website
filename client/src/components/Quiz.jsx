import React, { useState, useCallback } from 'react';

import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../content/siteContent';
import './Quiz.css';

/*
  Quiz — "How ecosystem-ready is your curriculum?"
  Short self-assessment ending in a result tier that links to /recommendations.
  Answers are NOT stored anywhere — all state is component-local, resets on refresh.
*/

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = useCallback((questionIndex, score) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: score }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (Object.keys(answers).length === QUIZ_QUESTIONS.length) {
      setSubmitted(true);
    }
  }, [answers]);

  const handleReset = useCallback(() => {
    setAnswers({});
    setSubmitted(false);
  }, []);

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const result = QUIZ_RESULTS.find(r => totalScore >= r.range[0] && totalScore <= r.range[1]);
  const allAnswered = Object.keys(answers).length === QUIZ_QUESTIONS.length;
  const progress = (Object.keys(answers).length / QUIZ_QUESTIONS.length) * 100;

  if (submitted && result) {
    return (
      <div className="quiz quiz--result" role="region" aria-label="Quiz results">
        <div className="quiz__result-card">
          <p className="quiz__result-level mono">{result.level}</p>
          <h3 className="quiz__result-title">{result.title}</h3>
          <p className="quiz__result-score mono text-muted">
            Score: {totalScore} / {QUIZ_QUESTIONS.length * 3}
          </p>
          <p className="quiz__result-desc">{result.description}</p>
          <div className="quiz__result-actions">
            <button
              className="btn btn--primary"
              onClick={() => {
                const el = document.getElementById('recommendations-list');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Recommendations →
            </button>
            <button className="btn btn--outline" onClick={handleReset}>
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz" role="form" aria-label="Ecosystem readiness self-assessment">
      <div className="quiz__header">
        <h3 className="quiz__title">How Ecosystem-Ready Is Your Curriculum?</h3>
        <p className="quiz__subtitle text-muted">
          A short self-assessment based on the four pillars of the curriculum ecosystem.
          Your answers are not stored anywhere.
        </p>
        {/* Progress bar */}
        <div className="quiz__progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="quiz__progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="quiz__progress-label mono text-muted">
          {Object.keys(answers).length} of {QUIZ_QUESTIONS.length} answered
        </p>
      </div>

      <div className="quiz__questions">
        {QUIZ_QUESTIONS.map((q, qi) => (
          <fieldset key={qi} className="quiz__question">
            <legend className="quiz__question-text">
              <span className="quiz__question-number mono">{qi + 1}.</span>
              {q.question}
            </legend>
            <div className="quiz__options">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === opt.score;
                return (
                  <label
                    key={oi}
                    className={`quiz__option ${isSelected ? 'quiz__option--selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`question-${qi}`}
                      value={opt.score}
                      checked={isSelected}
                      onChange={() => handleSelect(qi, opt.score)}
                      className="quiz__radio"
                    />
                    <span className="quiz__option-indicator" aria-hidden="true" />
                    <span className="quiz__option-text">{opt.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="quiz__actions">
        <button
          className="btn btn--primary"
          onClick={handleSubmit}
          disabled={!allAnswered}
          aria-disabled={!allAnswered}
        >
          See Your Results
          <span aria-hidden="true">→</span>
        </button>
        {!allAnswered && (
          <p className="quiz__hint mono text-muted">
            Answer all {QUIZ_QUESTIONS.length} questions to see your result
          </p>
        )}
      </div>
    </div>
  );
}
