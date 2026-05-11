//Script ida

use("veterinaria");

db.cliente.insertOne({
    id_cliente: 1,
    nombre: "Paulina Ortega",
    telefono: "5512345678",
    direccion: "CDMX"
})

db.animal.insertOne({
    id_animal: 1,
    nombre: "Apolo",
    especie: "Perro",
    raza: "Labrador",
    edad: 3,
    peso: 25.5,
    sexo: "M",
    id_cliente: 1
})

db.historial.insertOne({
    id_historial: 1,
    fecha: "2026-04-21",
    diagnostico: "Infeccion",
    tratamiento: "Antibiotico",
    evolucion: "Mejorando",
    id_animal: 1
})

db.veterinario.insertOne({
    id_veterinario: 1,
    nombre: "Dra. Valencia",
    especialidad: "Cirugia"
})

db.cita.insertOne({
    id_cita: 1,
    fecha: "2026-04-22",
    tipo: "Consulta",
    id_animal: 1,
    id_veterinario: 1
})

db.inventario.insertOne({
    id_producto: 1,
    nombre: "Vacuna Antirrabica",
    tipo: "Medicamento",
    cantidad: 50,
    fecha_caducidad: "2026-12-31"
})

db.movimiento.insertOne({
    id_movimiento: 1,
    tipo: "entrada",
    fecha: "2026-04-22",
    cantidad: 20,
    id_producto: 1
})


//Rollback

db.movimiento.deleteOne({ id_movimiento: 1 })

db.inventario.deleteOne({ id_producto: 1 })

db.cita.deleteOne({ id_cita: 1 })

db.veterinario.deleteOne({ id_veterinario: 1 })

db.historial.deleteOne({ id_historial: 1 })

db.animal.deleteOne({ id_animal: 1 })

db.cliente.deleteOne({ id_cliente: 1 })



