import Image from 'next/image'
import Link from 'next/link';
// import food_img from '/public/food0.png'

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
    // let a = [20, 30, 40];
    // let b = a.map((i, j) => {
    //     console.log(j, i, '안녕');
    //     return 10
    // });
    // console.log(b);

    return (
        <div>
            <h4 style={{ color: 'green', fontSize: '30px' }} className="title">상품목록</h4>
            {
                상품.map((item, index) => {
                    return (
                        <div>
                            <div className='food' key={index}>
                                {/* <img src={'/food' + i + '.png'} alt="토마토" className='food-img' /> */}
                                <img src={`/food${index}.png`} alt="토마토" className='food-img' />

                                <h4>{item} $40</h4>

                            </div>
                            {/* <div className='food'> <h4>{상품[i]} $40</h4></div> */}
                        </div>
                    )
                })
            }
            {/* <div className='food'> <h4>{상품[0]} $40</h4></div>
            <div className='food'> <h4>{상품[1]} $50</h4></div>
            <div className='food'> <h4>{상품[2]} $50</h4></div> */}
        </div>
    )
}