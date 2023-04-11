
// 이미지 전환 효과 view component
import React from 'react'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import { BgRemoveGoal, BgRemoveOriginal, VikiOrig, VikiGoal, VikiGoal2 } from '@/res/image'

const ImageEffectView = () => {
  return (
    <>
      <div className='py-2'>
        <h1 className='text-2xl font-bold'>인물 생성</h1>
      </div>
      <ImgComparisonSlider>
        <img slot='first' src={ BgRemoveGoal.src } width={512} height={512}/>
        <img slot='second' src={ BgRemoveOriginal.src } width={512} height={512}/>
      </ImgComparisonSlider>

      <div className='py-2'>
        <h1 className='text-2xl font-bold'>배경 변경</h1>
      </div>
      

      <ImgComparisonSlider>
        <img slot='first' src={ VikiOrig.src } width={512} height={512}/>
        <img slot='second' src={ VikiGoal.src } width={512} height={512}/>
      </ImgComparisonSlider>

      <div className='py-2'>
        <h1 className='text-2xl font-bold'>인물 & 배경 변경</h1>
      </div>

      <ImgComparisonSlider>
        <img slot='first' src={ VikiOrig.src } width={512} height={512}/>
        <img slot='second' src={ VikiGoal2.src } width={512} height={512}/>
      </ImgComparisonSlider>
    </>
  )
}

export default ImageEffectView