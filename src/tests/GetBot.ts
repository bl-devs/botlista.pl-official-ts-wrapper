import { GetBot } from "../index";

const test = async() => {
    const bot = await GetBot("732304987673067631");
    console.log(bot)
}
test()