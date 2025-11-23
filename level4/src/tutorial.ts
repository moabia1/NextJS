import { mawiya } from "./types"

function hello<T>(a:T, b:T) :T{
  return a
}
hello(12, 21)

let b: mawiya
b = {
  name: "hello",
  age:12
}
