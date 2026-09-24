import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

async function qedixPayFromHiddenField(data: FormData) {
  'use server';

  const amount = data.get('amount');

  await stripe.paymentIntents.create(
    {
      amount: amount as any,
      currency: 'usd',
    },
    {
      idempotencyKey: 'qedix-a13-s003',
    },
  );
}

export function QedixHiddenPaymentForm() {
  return (
    <form action={qedixPayFromHiddenField}>
      <input type="hidden" name="amount" value="100" />
      <button type="submit">Pay</button>
    </form>
  );
}