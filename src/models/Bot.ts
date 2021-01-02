import fetch from "node-fetch";

const GetBot = async (botID) => {
  if (!botID)
    throw new SyntaxError("Missing param botID in your request method!");

  let req = await fetch(`https://botlista.pl/api/bots/${botID}`);
  req = await req.json();
  req = req[0];
  if(!req) throw new Error("Bot couldn't found.")
  return req;
};
export { GetBot };
