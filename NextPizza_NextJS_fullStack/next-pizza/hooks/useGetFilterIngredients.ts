/* import { Api } from "@/services/api-client";
import { Ingredient} from "@prisma/client";
import { useEffect, useState } from "react";

interface ReturnProps{
    ingredients: Ingredient[];
}

export const useFilterIngredients = ():ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    useEffect(()=>{
        async function fetchIngredients() {
            try{
                const Ingredients = await Api.ingredients.getAll();
                setIngredients(Ingredients);
            }
            catch (error){
                console.error(error)
            }
        }
        fetchIngredients();
    },[])

    return {ingredients};
} */

import { useQuery } from '@tanstack/react-query';
import { Api } from '@/services/api-client'; 
import { Ingredient } from '@prisma/client';

interface ReturnProps{
    ingredients: Ingredient[];
    isLoading:boolean;
    error: Error | null;
}

export const useGetFilterIngredients = ():ReturnProps => {
  const { data: ingredients = [], isLoading, error } = useQuery<Ingredient[]>({
    queryKey: ['ingredients'],
    queryFn: Api.ingredients.getAll,
  });

  return { ingredients, isLoading, error };
};