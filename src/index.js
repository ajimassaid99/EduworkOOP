document.addEventListener("DOMContentLoaded", function() {
    class Table {
      constructor(init) {
        this.init = init;
      }
  
      createTable(data) {
        let table = `
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
        `;
        data.forEach((d) => {
          table += `
            <tr>
              <td>${d.name}</td>
              <td>${d.price}</td>
              <td>${d.description}</td>
            </tr>
          `;
        });
        table += `
            </tbody>
          </table>
        `;
  
        return table;
      }
  
      render(element) {
        let table = this.createTable(this.init.data);
        element.innerHTML = table;
      }
    }
  
    const products = [
      {
        name: "Product 1",
        price: "$10",
        description: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Product 2",
        price: "$20",
        description: "Consectetur adipiscing elit",
      },
      {
        name: "Product 3",
        price: "$25",
        description: "Consectetur adipiscing elit",
      },
      // Add more product objects here as needed
    ];
  
    const table = new Table({ data: products });
  
    const app = document.getElementById("app");
    table.render(app);
  });
  