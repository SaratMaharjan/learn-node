'use strict'

import { getAll, add as addOne } from "./widgets";

addOne({
	name: "first",
	color: "red"
})

console.log(getAll());
