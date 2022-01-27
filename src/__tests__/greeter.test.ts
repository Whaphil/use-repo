import { Grüßer } from "../index";

test(
    "Greeter",()=>{
        expect(Grüßer("Hanswurst von den Flüssen")).toBe("Seid gegrüßt Hanswurst von den Flüssen!");
    }
);