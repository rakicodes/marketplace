"use client"
import React from 'react'
import UnderlineInputWithLabel from '../molecules/UnderlineInputWithLabel'
import SwitchWithLabel from '../molecules/SwitchWithLabel'
import SelectMenu from '../atoms/SelectMenu'
import FilledButton from '../atoms/FilledButton'
import Dropdown from '../molecules/Dropdown'
import ImageInput from '../atoms/ImageInput'

const AddListingForm = () => {
  return (
    <div className="flex flex-col gap-y-3">
        <UnderlineInputWithLabel label="name" name="name" placeholder="name" value="" onChange={() => console.log()} />
        <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3">
            <div className="w-full md:w-1/2">
                <UnderlineInputWithLabel label="serial number" name="name" placeholder="name" value="" onChange={() => console.log()} />
            </div>
            <div className="w-full md:w-1/2">
                <UnderlineInputWithLabel label="price" name="name" placeholder="name" value="" onChange={() => console.log()} />
            </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3">
            <div className="w-full md:w-1/2">
                <UnderlineInputWithLabel label="make" name="name" placeholder="name" value="" onChange={() => console.log()} />
            </div>
            <div className="w-full md:w-1/2">
                <UnderlineInputWithLabel label="package" name="name" placeholder="name" value="" onChange={() => console.log()} />
            </div>
        </div>
        <SelectMenu label="category">
            <Dropdown options={["option", "option2", "option3"]}/>
        </SelectMenu>
        <div className="w-full flex flex-col gap-y-3">
            <SwitchWithLabel label="warranty" />
            <SwitchWithLabel label="certified" />
            <SwitchWithLabel label="used"/>
        </div>
        <div>
            <ImageInput />
        </div>
        <FilledButton onClick={() => console.log()}>Submit</FilledButton>
    </div>
  )
}

export default AddListingForm