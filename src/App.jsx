import React, { useState } from "react";
import img1 from "../src/assets/example1.jpg"
import img2 from "../src/assets/example2.jpg"
import img3 from "../src/assets/example3.jpg"
import img4 from "../src/assets/example4.jpg"
import img5 from "../src/assets/example5.jpg"

const stages = [
  {
    id: 1,
    label: "Stage 1",
    title: "Slow Reading: The World as a Book",
    medium: "Printed book / long-form essay",
    description:
      "You sit with a long text. The author builds an argument over chapters. You pause, reread, underline, and compare ideas.",
    changes:
      "The pace is set by the reader, not the content. You can go back, reflect, and connect this book to other things you’ve read.",
    postman:
      "Postman believed print culture supported deep, rational public debate because it rewarded patience, logic, and attention.",
    image: img1,
    imageAlt: "old advertisement"
  },
  {
    id: 2,
    label: "Stage 2",
    title: "The Lecture or Public Talk",
    medium: "Live talk",
    description:
      "The same idea is turned into a 40-minute talk. There are slides, a story or two, maybe a joke to keep people listening.",
    changes:
      "Some nuance is cut for time and clarity. The focus shifts a bit toward performance: tone of voice, presence, and visuals.",
    postman:
      "The idea still can be serious, but it now has to fit a time slot and keep an audience’s attention in real time.",
    image: img2,
    imageAlt: "Speaker presenting in front of a projected slide"
  },
  {
    id: 3,
    label: "Stage 3",
    title: "News Segment: Serious Issue, Short Time",
    medium: "5-minute TV or YouTube news piece",
    description:
      "The topic becomes a short segment with dramatic music, B-roll, and bold on-screen text. It has to fit between ads.",
    changes:
      "The story is compressed into soundbites. Emotional reactions and visuals start to matter more than careful reasoning.",
    postman:
      "Postman argued that TV news turns even tragedies into just another interesting thing to watch before the next commercial.",
    image: img3,
    imageAlt: "News anchor at a desk with breaking news graphics"
  },
  {
    id: 4,
    label: "Stage 4",
    title: "Debate as a Show",
    medium: "2-minute split-screen ‘debate’ clip",
    description:
      "Two people argue loudly for a few minutes. They interrupt each other. The most memorable part is the zinger line.",
    changes:
      "Winning the moment matters more than explaining a position. Complexity is punished; quick comebacks are rewarded.",
    postman:
      "In this format, politics looks less like decision-making and more like sports or reality TV. The image of the person beats the content of their ideas.",
    image: img4,
    imageAlt: "Split-screen TV debate with two people arguing"
  },
  {
    id: 5,
    label: "Stage 5",
    title: "Just Vibes: The Meme/TikTok Version",
    medium: "15-second short / meme",
    description:
      "Now it’s a TikTok, a meme, or a trending sound. Maybe it’s a joke about the issue, a sarcastic reaction, or a quick hot take.",
    changes:
      "There’s no room for context, history, or careful argument. What matters is: Is it funny? Relatable? Shareable?",
    postman:
      "At this point, the original idea is almost gone. What survives is entertainment value — the thing Postman warned about when he said we might amuse ourselves to death.",
    image: img5,
    imageAlt: "Phone screen showing a short-form video feed"
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const stage = stages[index];
  const isLast = index === stages.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        padding: "1.5rem"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "#020617",
          borderRadius: "16px",
          padding: "1.75rem",
          boxShadow: "0 20px 35px rgba(0,0,0,0.4)",
          color: "#e5e7eb",
          border: "1px solid #1f2937"
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h1
            style={{
              fontSize: "1.75rem",
              marginBottom: "0.25rem",
              fontWeight: 700
            }}
          >
            Amusing Ourselves to Death
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#9ca3af" }}>
            How a serious idea gets flattened as it’s forced to become more
            entertaining.
          </p>
        </div>

        {/* Progress */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem"
          }}
        >
          <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
            {stage.label} of {stages.length}
          </div>
          <div
            style={{
              flexGrow: 1,
              height: "6px",
              borderRadius: "999px",
              background: "#111827",
              marginLeft: "0.75rem",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                width: `${((index + 1) / stages.length) * 100}%`,
                height: "100%",
                background: "#38bdf8",
                transition: "width 0.3s ease"
              }}
            ></div>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#020617",
            borderRadius: "12px",
            border: "1px solid #1f2937",
            padding: "1.25rem",
            marginBottom: "1.25rem"
          }}
        >
          {/* Image */}
          {stage.image && (
            <div
              style={{
                marginBottom: "1rem",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #1f2937",
                maxHeight: "250px",
                display: "flex",
                justifyContent: "center",
                background: "#020617"
              }}
            >
              <img
                src={stage.image}
                alt={stage.imageAlt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          )}

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.35rem"
            }}
          >
            {stage.title}
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#9ca3af",
              marginBottom: "0.9rem"
            }}
          >
            Medium: <span style={{ color: "#e5e7eb" }}>{stage.medium}</span>
          </p>

          <div style={{ marginBottom: "0.75rem" }}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.25rem"
              }}
            >
              What it looks like
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
              {stage.description}
            </p>
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.25rem"
              }}
            >
              What changes here?
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
              {stage.changes}
            </p>
          </div>

          <div
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(129,140,248,0.08))",
              border: "1px solid rgba(56,189,248,0.4)"
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.5,
                color: "#bfdbfe"
              }}
            >
              <strong>Postman’s point:</strong> {stage.postman}
            </p>
          </div>
        </div>

        {/* Footer / Reflection */}
        <div style={{ marginBottom: "1rem" }}>
          {isLast ? (
            <p
              style={{
                fontSize: "0.95rem",
                color: "#9ca3af",
                lineHeight: 1.5
              }}
            >
              By the final stage, the serious issue has been squeezed into a
              quick hit of entertainment. Postman’s warning is that when every
              medium is built to amuse us, even our most important problems
              start to feel like just more content to scroll past.
            </p>
          ) : (
            <p
              style={{
                fontSize: "0.95rem",
                color: "#9ca3af",
                lineHeight: 1.5
              }}
            >
              Keep going to see how the same idea changes as it’s pushed into
              shorter, more entertaining formats.
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleNext}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: isLast ? "#22c55e" : "#38bdf8",
            color: "#020617",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "transform 0.1s ease, box-shadow 0.1s ease",
            boxShadow: "0 10px 20px rgba(0,0,0,0.35)"
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {isLast ? "Start over" : "Make it more entertaining →"}
        </button>
      </div>
    </div>
  );
}

export default App;

