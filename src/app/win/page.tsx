import * as global_components from '@/components/global'
import * as components from '@/components'
import { headers } from 'next/headers'
import { Metadata, ResolvingMetadata } from 'next'
import { getLinkDetails } from '@squirrel-labs/peanut-sdk'
import * as utils from '@/utils'
export const dynamic = 'force-dynamic'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

//TODO: update getLinkDetails to getRaffleDetails
// function createURL(searchParams: { [key: string]: string | string[] | undefined }): string {
//     const baseURL = 'https://peanut.to/claim'

//     const queryParams = new URLSearchParams()

//     Object.keys(searchParams).forEach((key) => {
//         const value = searchParams[key]
//         if (Array.isArray(value)) {
//             value.forEach((item) => queryParams.append(key, item))
//         } else if (value) {
//             queryParams.append(key, value)
//         }
//     })

//     return `${baseURL}?${queryParams.toString()}`
// }

// export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//     let title = 'Peanut Protocol'

//     try {
//         const url = createURL(searchParams)
//         const linkDetails = await getLinkDetails({ link: url })
//         title =
//             'You got sent ' +
//             utils.formatAmount(Number(linkDetails.tokenAmount)) +
//             ' in ' +
//             linkDetails.tokenSymbol +
//             '!'
//     } catch (e) {
//         console.log('error: ', e)
//     }

//     return {
//         title: title,
//         icons: {
//             icon: '/logo-favicon.png',
//         },
//         openGraph: {
//             images: [
//                 {
//                     url: '/claim-metadata-img.jpg',
//                 },
//             ],
//         },
//     }
// }

export default function WinPage({ params, searchParams }: Props) {
    return (
        <global_components.PageWrapper bgColor="bg-red">
            <components.Win />
        </global_components.PageWrapper>
    )
}
