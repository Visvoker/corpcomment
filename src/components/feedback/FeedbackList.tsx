import { useFeedbackItemsContext } from "../../lib/hooks";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {filteredFeedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
