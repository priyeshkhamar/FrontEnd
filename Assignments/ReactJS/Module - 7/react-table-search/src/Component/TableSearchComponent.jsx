import { useState } from 'react';

const TableSearchComponent = () => {
    const [searchText, setSearchText] = useState("");

    const data = [
        { id: 1, name: 'Rahul Sharma', age: 28, city: 'Delhi' },
        { id: 2, name: 'Priya Patel', age: 34, city: 'Mumbai' },
        { id: 3, name: 'Amit Singh', age: 22, city: 'Bangalore' },
        { id: 4, name: 'Sneha Gupta', age: 25, city: 'Kolkata' },
        { id: 5, name: 'Ankit Verma', age: 30, city: 'Chennai' },
        { id: 6, name: 'Pooja Sharma', age: 29, city: 'Hyderabad' },
        { id: 7, name: 'Rajesh Kumar', age: 31, city: 'Pune' },
        { id: 8, name: 'Divya Singh', age: 27, city: 'Ahmedabad' },
        { id: 9, name: 'Vikram Singh', age: 26, city: 'Jaipur' },
        { id: 10, name: 'Neha Gupta', age: 32, city: 'Lucknow' },
        { id: 11, name: 'Manish Patel', age: 23, city: 'Chandigarh' },
        { id: 12, name: 'Swati Sharma', age: 35, city: 'Indore' },
        { id: 13, name: 'Arun Kumar', age: 24, city: 'Bhopal' },
        { id: 14, name: 'Ritu Verma', age: 33, city: 'Surat' },
        { id: 15, name: 'Aakash Singh', age: 29, city: 'Varanasi' },
        { id: 16, name: 'Anjali Gupta', age: 27, city: 'Visakhapatnam' },
        { id: 17, name: 'Akash Patel', age: 30, city: 'Patna' },
        { id: 18, name: 'Jyoti Sharma', age: 26, city: 'Raipur' },
        { id: 19, name: 'Vivek Kumar', age: 28, city: 'Nagpur' },
        { id: 20, name: 'Meera Singh', age: 31, city: 'Gurugram' }
    ];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by Name..."
                value={searchText}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSearchComponent;
