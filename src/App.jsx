import {useState} from 'react'
import './App.css'

function App() {

    return (
        <div className="App">

        </div>
    )
}

export default App

const holyNames = [
    {
        id: 1,
        title: 'Hari',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 2,
        title: 'Krishna',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 3,
        title: 'Rama',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 4,
        title: 'Narayana',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 5,
        title: 'Madhusudana',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 6,
        title: 'Keshava',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 7,
        title: 'Vishnu',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 8,
        title: 'Vamana',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
    {
        id: 9,
        title: 'Nrisimha',
        seen: false,
        updatedAt: null,
        description: undefined,
    },
]

const changeList = (id, seen, description) => holyNames.map((item) => item.id === id
    ? {
        ...item,
        seen,
        updatedAt: new Date().toUTCString(),
        description,
    }
    : item
)

const testDate = changeList(2, true, 'Supreme personality of God')
console.log(testDate)
