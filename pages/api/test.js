// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: "Only POST requests allowed. "});
    return;
  }

  console.log(req.body);
  res.status(200).send(req.body)
}
