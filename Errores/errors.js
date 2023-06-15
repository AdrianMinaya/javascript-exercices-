function lanzarError(mensaje) {
  throw new Error(mensaje);
}

// Ejemplo de uso
try {
  lanzarError("Este es un mensaje de error personalizado.");
} catch (error) {
  console.log("Se ha producido un error: " + error.message);
}
