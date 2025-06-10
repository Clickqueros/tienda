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

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: null
  });

  // Datos de ejemplo para las gráficas
  const salesData = [
    { date: 'Ene 23', 'Ventas': 2890 },
    { date: 'Feb 23', 'Ventas': 1890 },
    { date: 'Mar 23', 'Ventas': 3890 },
    { date: 'Abr 23', 'Ventas': 3490 },
    { date: 'May 23', 'Ventas': 2490 },
  ];

  const categoryData = [
    { name: 'Electrónicos', value: 35 },
    { name: 'Ropa', value: 25 },
    { name: 'Hogar', value: 20 },
    { name: 'Otros', value: 20 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo producto:', newProduct);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Panel de Administración</Title>
      <Text>Bienvenido al panel de control de tu tienda</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Resumen</Tab>
          <Tab>Productos</Tab>
          <Tab>Crear Producto</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                <Text>Ventas Totales</Text>
                <Metric>$ 45,231</Metric>
                <AreaChart
                  className="mt-4 h-72"
                  data={salesData}
                  index="date"
                  categories={['Ventas']}
                  colors={['blue']}
                />
              </Card>
              <Card>
                <Text>Productos por Categoría</Text>
                <DonutChart
                  className="mt-4 h-72"
                  data={categoryData}
                  category="value"
                  index="name"
                  colors={['blue', 'cyan', 'indigo', 'violet']}
                />
              </Card>
              <Card>
                <Text>Ventas por Mes</Text>
                <BarChart
                  className="mt-4 h-72"
                  data={salesData}
                  index="date"
                  categories={['Ventas']}
                  colors={['blue']}
                />
              </Card>
            </Grid>
          </TabPanel>

          <TabPanel>
            <Card className="mt-6">
              <Title>Lista de Productos</Title>
              <Table className="mt-6">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Producto</TableHeaderCell>
                    <TableHeaderCell>Precio</TableHeaderCell>
                    <TableHeaderCell>Estado</TableHeaderCell>
                    <TableHeaderCell>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center">
                        No hay productos disponibles
                      </TableCell>
                    </TableRow>
                  ) : (
                    products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                          <Badge color="emerald">Activo</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="xs" variant="secondary" className="mr-2">
                            Editar
                          </Button>
                          <Button size="xs" variant="secondary" color="red">
                            Eliminar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Card>
          </TabPanel>

          <TabPanel>
            <Card className="mt-6">
              <Title>Crear Nuevo Producto</Title>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <Text>Título del Producto</Text>
                  <TextInput
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    placeholder="Ingresa el título del producto"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Text>Precio</Text>
                  <TextInput
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Ingresa el precio"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Text>Descripción</Text>
                  <Textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    placeholder="Ingresa la descripción del producto"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Text>Imagen del Producto</Text>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="mt-2 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept="image/*"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Crear Producto
                </Button>
              </form>
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
} 