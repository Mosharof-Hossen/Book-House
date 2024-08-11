import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStorageCart } from '../../Utilitis/LoaclStorage';
import { useLoaderData } from 'react-router-dom';


const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const readBooks = useLoaderData()
    const [data, setData] = useState([]);

    useEffect(() => {
        const readBooksId = getStorageCart("readCart");
        const filteredReadBooks = Array.isArray(readBooks) ? readBooks.filter((dt) => readBooksId.includes(dt.bookId)) : [];
        setData(filteredReadBooks)

    }, [readBooks])


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='flex justify-center mt-16 '>
            <BarChart className='bg-slate-100 rounded-lg px-16'
                width={800}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;