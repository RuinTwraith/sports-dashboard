export const fetchAPI = async ({
  url,
  method = 'GET',
}: {
  url: string;
  method?: string;
}) => {
  try {
    const response = await fetch(url, { method });
    return response.json();
  } catch (e) {
    console.error('Error: ', e);
    return [];
  }
};
