import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';

export default function UserList() {
  const [countries, setCountries] = useState([]);

  const getcountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Native Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Capital',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Flag',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => <img width={50} height={50} src={value} alt="Flag" />,
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical', // Make the table responsive vertically
  };

  useEffect(() => {
    getcountries();
  }, []);

  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <MUIDataTable
        title="User List"
        data={countries.map((country) => [country.name, country.nativeName, country.capital, country.flag])}
        columns={columns}
        options={options}
      />
    </div>
  );
}
