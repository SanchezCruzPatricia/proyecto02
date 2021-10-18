db.products.find( { activo: "no" } )
db.inventory.find( { division: { $eq: "pesos pesado" } } )
db.inventory.find( { estatura: { $in: [ "170cm", "173cm" ] } } )
db.inventory.find( { $or: [ { edad: { $lt: 31 } }, { activo: "si" } ] } )
db.inventory.find( { combate: { $lt: 50 } } )
db.inventory.find( { edad: { $nin: [ 50, 80 ] } } )
