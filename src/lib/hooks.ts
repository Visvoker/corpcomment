import { useContext } from "react";
import { feedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(feedbackItemsContext);
  if (!context) {
    throw new Error(
      "feedbackItemsContext is not define in FeedbackList component"
    );
  }
  return context;
}