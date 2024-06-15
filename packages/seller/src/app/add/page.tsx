"use client";
import { useEffect, useState } from "react";
import AddListingTemplate from "@ui/templates/AddListingTemplate";
import { useRouter } from "next/navigation";
import { IListing } from "@ui/types/props";
import { getCookie } from "cookies-next";
import { formatStringToTwoDecimal } from "@ui/utils/format";
import { areRequiredFieldsFilled, isAddListingFormValid, isFieldGteOne, isLenLteMax, isPriceValid, isYearValid } from "@ui/utils/validation";
import { IMAGES_MAX_LEN } from "@ui/utils/constant";

const INITIAL: IListing = {
	name: "",
	images: [] as unknown as FileList,
	price: "",
	warranty: 0,
	category: "",
	serialNumber: "",
	numOfUnits: 1,
	packageType: "",
	make: "",
	year: "",
	isUsed: 0,
	isCertified: 0,
};
const Page = () => {
	const router = useRouter();
	const [data, setData] = useState(INITIAL);
  const [err, setErr] = useState<Error | string | null>(null);
  const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!getCookie("auth")) {
			router.push("/");
		}
	}, [router]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    if (isAddListingFormValid(data)) {
      setOpen(false)
      const formData = new FormData()
      formData.append("data", JSON.stringify({
        ...data,
        isUsed: data.isUsed ? true : false,
        isCertified: data.isCertified ? true : false,
        warranty: data.warranty ? true : false,
        price: formatStringToTwoDecimal(data.price)
      }))

    } else {
      setOpen(true)
      if (!areRequiredFieldsFilled(data)) {
        setErr("Make sure all fields are filled")
      } else if (!isFieldGteOne(data.numOfUnits)) {
        setErr("Number of units must be greater than 1")
      } else if (!isLenLteMax(data.images.length, IMAGES_MAX_LEN)) {
        setErr("Number of images can't be greater than 6")
      } else if (!isPriceValid(data.price)) {
        setErr("Price is not valid")
      } else if (!isYearValid(data.year)) {
        setErr("Year is not valid")
      } else {
        setErr("Sorry something went wrong")
      }
    }
    
	};

	return (
		<>
			<AddListingTemplate
				name={data.name}
				images={data.images}
				price={data.price}
				warranty={data.warranty}
				category={data.category}
				serialNumber={data.serialNumber}
				numOfUnits={data.numOfUnits}
				packageType={data.packageType}
				make={data.make}
				year={data.year}
				isUsed={data.isUsed}
				isCertified={data.isCertified}
        error={err}
        open={open}
        handleOpen={setOpen}
				handleChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, name: e.target.value })
				}
				handleChangeMake={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, make: e.target.value })
				}
				handleChangePrice={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, price: e.target.value })
				}
				handleChangeSerialNumber={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, serialNumber: e.target.value })
				}
				handleChangePackage={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, packageType: e.target.value })
				}
				handleClickIsUsed={() =>
					setData({ ...data, isUsed: data.isUsed ? 0 : 1 })
				}
				handleClickIsCertified={() =>
					setData({ ...data, isCertified: data.isCertified ? 0 : 1 })
				}
				handleClickWarranty={() =>
					setData({ ...data, warranty: data.warranty ? 0 : 1 })
				}
				handleClickCategory={(c) => setData({ ...data, category: c })}
				handleChangeImages={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({
						...data,
						images: e.target.files
							? e.target.files
							: ([] as unknown as FileList),
					})
				}
        handleChangeYear={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, year: e.target.value })
				}
				handleChangeNumOfUnits={(e: React.ChangeEvent<HTMLInputElement>) =>
					setData({ ...data, numOfUnits: +e.target.value })
				}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default Page;
