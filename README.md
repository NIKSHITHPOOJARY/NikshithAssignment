## Clone the Repository:
git clone https://github.com/NIKSHITHPOOJARY/lioAssignment.git
cd lioAssignment

## Install Dependencies:
npm install

## Running the Server
node server.js <br />
The server will run on localhost:3000

## API Endpoints 
Add to Cart <br />
URL: /add-to-cart <br />
Method: POST <br />
Request Body:{
  "id": "string",
  "price": "number",
  "quantity": "number"
} <br />
Response: {
  "total": "number",
  "items": [
    {
      "id": "string",
      "price": "number",
      "quantity": "number",
      "itemTotal": "number"
    }
  ]
}
<br />
## Testing
To run the test:
npm test

<br />

## CSV
node processFile.js input.csv output.json
<br />
Sample Input CSV
<br />
id,name,price <br />
1,Product1,10 <br />
2,Product2,20 <br />

## Output JSON
<b /> <br />
[ <br />
  { <br />
    "id": "1", <br />
    "name": "Product1", <br />
    "price": "10" <br />
  }, <br />
  { <br />
    "id": "2", <br />
    "name": "Product2", <br />
    "price": "20" <br />
  } <br />
] <br />






