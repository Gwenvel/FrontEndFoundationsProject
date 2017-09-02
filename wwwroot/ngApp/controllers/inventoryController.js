class InventoryController {
    constructor() {
        this.message = "Explore to find what you wish......";
        this.cars = [
            {Make: "Volkswagen",  Model: "Jetta", Color: "White", Year: 2017, Price: 15482},
            {Make: "Volkswagen",  Model: "GTI", Color: "Black", Year: 2006, Price: 20985},
            {Make: "Volkswagen",  Model: "Touareg", Color: "Grey", Year: 2005, Price: 30584},
            {Make: "Volkswagen",  Model: "eos", Color: "Silver", Year: 2000, Price: 68742},
            {Make: "Volkswagen",  Model: "New Beetle", Color: "Black", Year: 2016, Price: 13548},
            {Make: "Volkswagen",  Model: "R32", Color: "Blue", Year: 2009, Price: 16574},
            {Make: "Volkswagen",  Model: "Continental Flying Spur", Color: "Black", Year: 2012, Price: 11586},
            {Make: "Volkswagen",  Model: "Porsche Cayenne", Color: "Grey", Year: 2016, Price: 18456},
            {Make: "Volkswagen",  Model: "Passat", Color: "White", Year: 2011, Price: 9445},
            {Make: "Volkswagen",  Model: "Phaeton", Color: "Black", Year: 2008, Price: 10586},
            {Make: "Volkswagen",  Model: "Gol", Color: "Black", Year: 2001, Price: 5682}
            ];
            this.getTax();
    }
    getSearch()
    {
        var input, table, td, tr, i, filter;

        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("carTable");
        tr = table.getElementsByTagName("tr");
        console.log(tr);
        for(i=1; i<tr.length; i++){
            // td = tr[i].getElementsByTagName("td");
            td=tr[i];
            console.log(td);
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                this.Error = "Not in our Inventory.";
            } 
              else {
                tr[i].style.display = "none";
                
              }
        }  
            
    }
    getTax()
    {
        for(let i=0;i<this.cars.length;i++){
            this.cars[i].Price = this.cars[i].Price + (this.cars[i].Price * .09);
        }
    }
}
