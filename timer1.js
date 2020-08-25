process.argv.slice(2).forEach(x =>{
  setTimeout(()=>{
    console.log(x, '\007');
  }, x * 1000);
});
