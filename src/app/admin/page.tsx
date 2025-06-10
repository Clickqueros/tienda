'use client';

import { useState } from 'react';
import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Grid,
  Col,
  Metric,
  AreaChart,
  BarChart,
  DonutChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
  Button,
  TextInput,
  Textarea,
} from '@tremor/react';

const sections = [
  { key: 'home', label: 'Inicio' },
  { key: 'list', label: 'Listar productos' },
  { key: 'create', label: 'Crear producto' },
];

export default function Admin() {
  const [activeSection, setActiveSection] = useState('home');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newProduct,
      },
    ]);
    setNewProduct({ title: '', price: '', description: '', image: null });
    setActiveSection('list');
  };

  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1D23] border-r border-[#23262F] flex flex-col py-6 px-4">
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-lg font-bold tracking-wide">Panel</span>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.key}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-150 ${activeSection === section.key ? 'bg-green-900/30 text-green-400' : 'hover:bg-[#23262F] text-gray-300'}`}
                  onClick={() => setActiveSection(section.key)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 bg-[#181A20] w-full">
          {activeSection === 'home' && (
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md mx-auto">
              <button
                className="w-full py-8 rounded-xl bg-green-600 hover:bg-green-700 text-white text-2xl font-bold shadow-lg transition"
                onClick={() => setActiveSection('list')}
              >
                Listar productos
              </button>
              <button
                className="w-full py-8 rounded-xl bg-[#23262F] hover:bg-green-900/30 text-green-400 text-2xl font-bold shadow-lg transition"
                onClick={() => setActiveSection('create')}
              >
                Crear producto
              </button>
            </div>
          )}

          {activeSection === 'list' && (
            <div className="w-full max-w-3xl mx-auto mt-8">
              <h1 className="text-3xl font-bold mb-6 text-center">Lista de productos</h1>
              {products.length === 0 ? (
                <div className="text-center py-12 bg-[#23262F] rounded-lg shadow">
                  <p className="text-gray-400">No hay productos creados aún</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-[#23262F] rounded-lg shadow p-6 flex flex-col gap-2">
                      {product.image && (
                        <img
                          src={URL.createObjectURL(product.image)}
                          alt={product.title}
                          className="h-40 w-full object-cover rounded mb-2"
                        />
                      )}
                      <h2 className="text-xl font-semibold">{product.title}</h2>
                      <p className="text-green-400 font-bold text-lg">${product.price}</p>
                      <p className="text-gray-300">{product.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSection === 'create' && (
            <div className="w-full max-w-md mx-auto mt-8 bg-[#23262F] rounded-lg shadow p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Crear producto</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Título del producto</label>
                  <input
                    type="text"
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    className="w-full rounded-md bg-[#181A20] border border-[#23262F] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Precio</label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="w-full rounded-md bg-[#181A20] border border-[#23262F] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Descripción</label>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="w-full rounded-md bg-[#181A20] border border-[#23262F] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Imagen</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg font-bold shadow-lg transition"
                >
                  Crear producto
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 