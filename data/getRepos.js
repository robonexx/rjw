/* 
export async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
  
    const res = await fetch(`${URL}/graphql`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const json = await res.json();
    return json.data;
  } */
