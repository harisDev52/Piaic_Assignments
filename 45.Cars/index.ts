function storeCarInfo(manufacturer : string, modelName : string, ...extras : any) {
      const car = {
        manufacturer: manufacturer,
        modelName: modelName
      };
    
      extras.forEach(extra => {
        const [key, value] = extra;
        car[key] = value;
      });
    
      return car;
    }
    
    console.log(storeCarInfo("Toyota", "Camry", ["color", "red"], ["optionalFeature", "sunroof"]));
    