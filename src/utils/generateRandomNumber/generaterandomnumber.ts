 const generateRandomNumber = (length = 16) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = Array(length).fill('').map(() => chars[Math.floor(Math.random() * chars.length)]);
    return result.join('');
  };
  
  export default  generateRandomNumber;