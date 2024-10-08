import BackButton from "../components/BackButton";
import Image from "../components/Image";
import FreeList from "../images/FreeList.png";

function DynamicMemoryAllocator() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Dynamic Memory Allocator</h1>
      <h3 className="mx-3 mx-md-5">
        In my computer architecture class at the University of Texas at Austin,
        I created a dynamic memory allocator in C. This project demonstrates my
        understanding of the C language and how memory gets allocated and
        deallocated within the heap.
      </h3>
      <Image className="info-img" src={FreeList}></Image>
      <h3 className="mx-3 mx-md-5">
        My implementation of malloc and free utilized a linked list that kept
        track of free blocks of memory. I stored meta data in each block like
        the size of the block, allocation status, and next block pointer. When
        the user calls malloc, my program looks for the first free block that
        fits the request, removes it from the free list, and returns it to the
        user. When the user calls free, my program will insert the block back
        into the free list in sorted order and coalesce with its neighbors if
        necessary. If there is no space in the free list, then my program will
        request more memory from the operating system.
      </h3>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default DynamicMemoryAllocator;
