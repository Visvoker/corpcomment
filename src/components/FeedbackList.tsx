import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGard",
    text: "test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 563,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "test Starbucks",
    daysAgo: 3,
  },
]

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem feedbackItem={feedbackItem} />
        )
      })}
    </ol>
  )
}
