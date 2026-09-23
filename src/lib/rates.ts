export type Quote = {
  rate: string;
  fee: string;
  lock: string;
};

export type QuoteRequest = {
  mode: string;
  from: string;
  to: string;
  amount: string;
};

/** Mock quote. TODO: replace with the quotes API. */
export function getQuote(_request: QuoteRequest, quote: Quote): Quote {
  return quote;
}
