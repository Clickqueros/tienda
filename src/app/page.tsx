import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Catalogostore
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Esta plataforma te brinda la capacidad de diseñar tu propio catálogo web sin requerir ningún conocimiento en programación. 
            Aquí, tú mismo puedes gestionar tu catálogo, añadir productos, personalizar colores y presentación, elegir entre diversas plantillas, y mucho más.
          </p>
          <Link 
            href="/register" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Crear catálogo ahora
          </Link>
        </div>
      </div>

      {/* Pedidos Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Pedidos por Catalogostore</h2>
            <p className="text-lg text-gray-600 mb-8">
              Permite a tus clientes hacer pedidos desde tu catálogo en línea y recibe un resumen detallado en tu WhatsApp para gestionar y cerrar ventas rápidamente. 
              Simplifica el proceso y mejora la experiencia para ambos.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-xl font-semibold text-blue-800">
                Únete a más de 100,000 clientes que ya confían en nosotros y transforma tu negocio hoy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Quienes somos?</h3>
              <p className="text-gray-600">
                Nosotros proveemos la plataforma para que tengas tu catálogo en línea, en dónde tu mismo puedes publicar tus productos, precios, imágenes, etc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Cómo se hacen los pedidos de mis clientes?</h3>
              <p className="text-gray-600">
                Los pedidos de tus clientes se te enviarán directamente a tu whatsapp, en donde puedes concretar finalmente con tu cliente
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Puedo ver los pedidos en la plataforma?</h3>
              <p className="text-gray-600">
                Si, tendrás una lista de todos los pedidos recibidos, y puedes administrarlos, asi como asignarle cobros, marcarlos como entregados, etc
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿El sistema maneja inventarios y/o existencias?</h3>
              <p className="text-gray-600">
                Si, puedes administrar las existencias de tus productos y mostrar en el catálogo lo que tienes disponible. 
                El sistema descontará automáticamente tus existencias al recibir una orden
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Cómo se comparte?</h3>
              <p className="text-gray-600">
                Te generamos un link de acceso a tu catálogo, que puedes compartir en tus redes sociales
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Cuales son los pasos para concretar el servicio?</h3>
              <p className="text-gray-600">
                Es simple, solo debes darle click al botón "Crear catálogo gratis" y seguir los pasos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Crea tu catálogo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ¡Crea tu catálogo en minutos, prueba nuestra plataforma y mejora tu negocio! 
            ¡Actúa ahora y marca la diferencia!
          </p>
          <Link 
            href="/register" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Crear catálogo gratis
          </Link>
        </div>
      </div>
    </main>
  )
} 