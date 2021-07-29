import {Item} from "./item.model"

export class Factura{
    constructor (public id: number, public fecha: Date, public items: Item[]){}
}