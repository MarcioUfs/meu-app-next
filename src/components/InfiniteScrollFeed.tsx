// // components/InfiniteScrollFeed.tsx
// 'use client'; // Marque como Client Component se estiver usando App Router

// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// // Importe a função que busca dados da sua API ou Server Action
// import { fetchPosts } from '../app/lib/api'; // Exemplo de função de fetch
// const feeda = {
//     "id": '1',
//     "content": 'Post inicial 1'
// }
// const InfiniteScrollFeed = () => {
//     const [posts, setPosts] = useState([feeda]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);
//     const { ref, inView } = useInView({
//         threshold: 0, // Dispara assim que o elemento fica visível
//     });

//     const loadMorePosts = async () => {
//         if (!hasMore) return;

//         // Simulação de paginação: a próxima página será a atual + 1
//         const nextPage = page + 1;
//         const newPosts = await fetchPosts(nextPage); // Função para buscar os próximos posts

//         setPosts(prevPosts => [...prevPosts, ...newPosts]);
//         setPage(nextPage);
//         // Verifique se ainda há mais dados a carregar com base na resposta da API
//         if (newPosts.length === 0 /* ou outra lógica */) {
//             setHasMore(false);
//         }
//     };

//     useEffect(() => {
//         if (inView && hasMore) {
//             loadMorePosts();
//         }
//     }, [inView, hasMore]);

//     return (
//         <div>
//             {posts.map((post) => (
//                 // Renderize seus posts aqui (ex: um componente PostCard)
//                 <div key={post.id} className="p-4 border-b">
//                     {post.content}
//                 </div>
//             ))}

//             {hasMore && (
//                 <div ref={ref} className="flex justify-center p-4">
//                     {/* Opcional: Adicione um spinner ou mensagem de carregamento */}
//                     Carregando mais itens...
//                 </div>
//             )}

//             {!hasMore && (
//                 <div className="flex justify-center p-4 text-gray-500">
//                     Você chegou ao fim do feed.
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InfiniteScrollFeed;


// import React, { useEffect, useState } from "react";
// import { getPosts } from "./actions";
// import Post from "./post.json";
// import { useInView } from "react-intersection-observer";

// export default function Posts() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [page, setPage] = useState<number>(0);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [scrollTrigger, isInView] = useInView();

//   const fetchPosts = async (page: number) => {
//     setIsLoading(true);
//     try {
//       const response = await getPosts(page);
//       setPosts((prevPosts) => [...prevPosts, ...response.data]);
//       setHasMore(response.data.length > 0);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(page);
//   }, [page]);

//   useEffect(() => {
//     if (isInView && hasMore && !isLoading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   }, [isInView, hasMore, isLoading]);

//   return (
//     <div>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} /> // Displays post data in card format
//       ))}
//       {(hasMore && 
//         <div ref={scrollTrigger}>Loading...</div>
//         ) || (
//         <p className="...">No more posts to load</p>
//       )}
//   );
// }