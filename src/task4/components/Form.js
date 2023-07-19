import React, { useState } from 'react'
import { VictoryPie } from 'victory-pie'

function Form() {

  const [toggle, setToggle] = useState(false)

  const [num, setNum] = useState({
    box1: 0,
    box2: 0
  })

  const [data, setData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNum((pre) => ({ ...pre, [name]: value }))
  }

  const handleBlur = (e) => {
    if (e.target.name === 'box1' && 100 > e.target.value) {
      setNum((pre) => ({ ...pre, box2: 100 - e.target.value }))
    } else {
      setNum((pre) => ({ ...pre, box1: 100 - e.target.value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log();
    console.log();
    setData([
      { x: "Box1", y: +num.box1 },
      { x: "Box2", y: +num.box2 },
    ])

    setToggle(true)
  }

  return (
    <>
      <div className=' col-5 p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 auto", boxShadow:"2px 6px 6px" }}>
        <form onSubmit={handleSubmit}>
          <div className='d-flex justify-content-around mb-4'>
            <div className='form-group'>
              <label>Box1
                <input onBlur={handleBlur} type='number' name='box1' value={num.box1} onChange={handleChange} className='form-control' />
              </label>
              {num.box1 > 100 && <p className='h6 text-danger'>Enter value less than 100</p>}
            </div>
            <div className='form-group'>
              <label>Box2
                <input onBlur={handleBlur} type='number' name='box2' value={num.box2} onChange={handleChange} className='form-control' />
              </label>
              {num.box2 > 100 && <p className='h6 text-danger'>Enter value less than 100</p>}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn px-5 btn-primary' type='submit'>Create Chart</button>
          </div>
        </form>
      </div>
      {toggle &&
        <div style={{ height: 500 }}>
          <VictoryPie
            data={data}
          />
        </div>
      }
    </>
  )
}

export default Form