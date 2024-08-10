"use client"
import UploadEbook from "@/components/(withLayout)/EducationalResources/UploadEbook";
import book from "../../../assets/educational-resources/book.png"
import BookCart from "@/components/(withLayout)/EducationalResources/BookCart";
import { Pagination } from "antd";
import { useState } from "react";

const EducationalResources = () => {

    const data = [
        {
            _id: 1,
            image: book,
            name: 'Harry Potter & the Philosophers Stone',
            author: 'J.K. Rowling',
            description: 'A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.'
        },
        {
            _id: 2,
            image: book,
            name: 'The Da Vinci Code',
            author: 'Dan Brown',
            description: 'A mystery thriller novel involving art, religion, and a conspiracy within the Catholic Church.'
        },
        {
            _id: 3,
            image: book,
            name: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description: 'A novel about racial injustice and moral growth in the American South during the 1930s.'
        },
        {
            _id: 4,
            image: book,
            name: '1984',
            author: 'George Orwell',
            description: 'A dystopian novel set in a totalitarian society under constant surveillance by Big Brother.'
        },
        {
            _id: 5,
            image: book,
            name: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description: 'A story of wealth, class, and the American Dream set in the Roaring Twenties.'
        },
        {
            _id: 6,
            image: book,
            name: 'Pride and Prejudice',
            author: 'Jane Austen',
            description: 'A classic novel about the manners and matrimonial machinations among the British gentry of the early 19th century.'
        },
        {
            _id: 7,
            image: book,
            name: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            description: 'A novel about a teenage boys experiences and struggles with identity, alienation, and loss of innocence.'
        },
        {
            _id: 8,
            image: book,
            name: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            description: 'A fantasy novel following the adventures of Bilbo Baggins, a hobbit who goes on a quest with a group of dwarves.'
        },
        {
            _id: 9,
            image: book,
            name: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            description: 'A dystopian novel about a future where books are banned and "firemen" burn any that are found.'
        },
        {
            _id: 10,
            image: book,
            name: 'The Alchemist',
            author: 'Paulo Coelho',
            description: 'A novel about a shepherd named Santiago who dreams of finding a hidden treasure and embarks on a journey to achieve his personal legend.'
        },
        {
            _id: 11,
            image: book,
            name: 'Brave New World',
            author: 'Aldous Huxley',
            description: 'A dystopian novel that explores a future society driven by technology, consumerism, and genetic engineering.'
        },
        {
            _id: 12,
            image: book,
            name: 'The Shining',
            author: 'Stephen King',
            description: 'A horror novel about a family staying in a haunted hotel where the fathers sanity deteriorates.'
        },
        {
            _id: 13,
            image: book,
            name: 'Jane Eyre',
            author: 'Charlotte Brontë',
            description: 'A classic novel about the life of an orphaned girl who becomes a governess and falls in love with her employer.'
        },
        {
            _id: 14,
            image: book,
            name: 'Wuthering Heights',
            author: 'Emily Brontë',
            description: 'A dark and passionate tale of love and revenge set on the Yorkshire moors.'
        },
        {
            _id: 15,
            image: book,
            name: 'Gone with the Wind',
            author: 'Margaret Mitchell',
            description: 'A historical novel set during the American Civil War and Reconstruction era, focusing on the life of Scarlett OHara.'
        },

    ];


    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <div>
            <UploadEbook></UploadEbook>
            <div>
                <div className=" grid grid-cols-3 gap-8 mt-8 ">
                    {
                        data.map(data => <BookCart key={data._id} data={data}></BookCart>)
                    }
                </div>
                <div className="py-6">
                    <Pagination
                        align="end"
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalItems}
                        onChange={handlePageChange} defaultCurrent={1}
                    />
                </div>

            </div>
        </div>
    );
};

export default EducationalResources;