
export default function useRequestOptions(method, accept, body, token=''){

const options = {
  method,
  headers:{
    'Accept': `${accept}`,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  ...(body &&{body:JSON.stringify(body)})
};
return options;
}
