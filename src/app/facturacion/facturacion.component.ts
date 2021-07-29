import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Factura } from './factura.model';
import { Item } from './item.model';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
    nombre: string;
    facturas: Factura[]=[];
    precio = 0;
    factura: String;
siExisten: boolean = true 
 suma = 0;
  

  ngOnInit(): void { }

agregarItem(id: number) {

try {

if (this.nombre != "" && this.precio != 0) {

let item = new Item(this.nombre, this.precio, id)

this.facturas [id].items.push(item)

this.nombre = ""

this.precio = 0

this.siExisten = false

}

return

} catch (e) {

console.log("An error occurred on Agregar Item =>", e)

}

}
  agregarFactura() {

    try {
    
    let factura = new Factura(this.facturas.length + 1, new Date(), [])
    
    this.facturas.push(factura)
    
    this.siExisten = false
    
    } catch (e) {
    
    }}}