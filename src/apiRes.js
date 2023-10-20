let dataApi = [];

export async function fetchDataFromAPI() {
    try {
      const response = await fetch('https://pruba-api.vercel.app/');
      
      if (!response.ok) {
        throw new Error('La solicitud a la API no fue exitosa');
      }
      
      dataApi = await response.json();
      
      return dataApi.productos;
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
      throw error;
    }
}
