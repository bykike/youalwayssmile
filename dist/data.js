const app = document.getElementById('app');

const data = [{
  id: 71,
  name: "Fire",
  image: "images/photo-71.jpg",
  width: "100%" },
{ 
  id: 70,
  name: "Fire",
  image: "images/photo-70.jpg",
  width: "20%" },
{ 
  id: 69,
  name: "Fire",
  image: "images/photo-69.jpg",
  width: "20%" },
{ 
  id: 68,
  name: "Fire",
  image: "images/photo-68.jpg",
  width: "20%" },
{ 
  id: 67,
  name: "Fire",
  image: "images/photo-67.jpg",
  width: "30%" },
{ 
  id: 66,
  name: "Fire",
  image: "images/photo-66.jpg" },
{ 
  id: 65,
  name: "Fire",
  image: "images/photo-65.jpg" },
{ 
  id: 64,
  name: "Fire",
  image: "images/photo-64.jpg" },
{ 
  id: 63,
  name: "Fire",
  image: "images/photo-63.jpg" },
{ 
  id: 62,
  name: "Fire",
  image: "images/photo-62.jpg" },
{ 
  id: 61,
  name: "Fire",
  image: "images/photo-61.jpg" },
{ 
  id: 60,
  name: "Fire",
  image: "images/photo-60.jpg" },
{ 
  id: 59,
  name: "Fire",
  image: "images/photo-59.jpg" },
{ 
  id: 58,
  name: "Fire",
  image: "images/photo-58.jpg" },
{ 
  id: 57,
  name: "Fire",
  image: "images/photo-57.jpg" },
{  
  id: 56,
  name: "Fire",
  image: "images/photo-56.jpg" },
{
  id: 55,
  name: "Fire",
  image: "images/photo-55.jpg" },
{  
  id: 54,
  name: "Fire",
  image: "images/photo-54.jpg" },
{ 
  id: 53,
  name: "Fire",
  image: "images/photo-53.jpg" },
{  
  id: 52,
  name: "Fire",
  image: "images/photo-52.jpg" },
{
  id: 51,
  name: "Fire",
  image: "images/photo-51.jpg" },
{
  id: 50,
  name: "Fire",
  image: "images/photo-50.jpg" },
{ 
  id: 49,
  name: "Fire",
  image: "images/photo-49.jpg" },
{  
  id: 48,
  name: "Fire",
  image: "images/photo-48.jpg" },
{
  id: 47,
  name: "Fire",
  image: "images/photo-47.jpg" },
{
  id: 46,
  name: "Fire",
  image: "images/photo-46.jpg" },
{ 
  id: 45,
  name: "Fire",
  image: "images/photo-45.jpg" },
{  
  id: 44,
  name: "Fire",
  image: "images/photo-44.jpg" },
{ 
  id: 43,
  name: "Fire",
  image: "images/photo-43.jpg" },
{  
  id: 42,
  name: "Fire",
  image: "images/photo-42.jpg" },
{
  id: 41,
  name: "Fire",
  image: "images/photo-41.jpg" },
{
  id: 40,
  name: "Fire",
  image: "images/photo-40.jpg" },
{ 
  id: 39,
  name: "Fire",
  image: "images/photo-39.jpg" },
{  
  id: 38,
  name: "Fire",
  image: "images/photo-38.jpg" },
{
  id: 37,
  name: "Fire",
  image: "images/photo-37.jpg" },
{
  id: 36,
  name: "Fire",
  image: "images/photo-36.jpg" },
{
  id: 35,
  name: "Fire",
  image: "images/photo-35.jpg" },
{  
  id: 34,
  name: "Fire",
  image: "images/photo-34.jpg" },
{
  id: 33,
  name: "Fire",
  image: "images/photo-33.jpg" },
{ 
  id: 32,
  name: "Fire",
  image: "images/photo-32.jpg" },
{  
  id: 31,
  name: "Fire",
  image: "images/photo-31.jpg" },
{
  id: 30,
  name: "Fire",
  image: "images/photo-30.jpg" },
{
  id: 29,
  name: "Fire",
  image: "images/photo-29.jpg" },
{
  id: 28,
  name: "Fire",
  image: "images/photo-28.jpg" },
{  
  id: 27,
  name: "Fire",
  image: "images/photo-27.jpg" },
{
  id: 26,
  name: "Fire",
  image: "images/photo-26.jpg" },
{
  id: 25,
  name: "Fire",
  image: "images/photo-25.jpg" },
{
  id: 24,
  name: "Fire",
  image: "images/photo-24.jpg" },
{
  id: 23,
  name: "Fire",
  image: "images/photo-23.jpg" },
{
  id: 22,
  name: "Fire",
  image: "images/photo-22.jpg" },
{
  id: 21,
  name: "Fire",
  image: "images/photo-21.jpg" },
{
  id: 20,
  name: "Fire",
  image: "images/photo-20.jpg" },
{
  id: 19,
  name: "Fire",
  image: "images/photo-19.jpg" },
{
  id: 18,
  name: "Fire",
  image: "images/photo-18.jpg" },
{
  id: 17,
  name: "Island",
  image: "images/photo-17.jpg" },
{
  id: 16,
  name: "Forest",
  image: "images/photo-16.jpg" },
{
  id: 15,
  name: "Whale",
  image: "images/photo-15.jpg" },
{
  id: 14,
  name: "Mountain",
  image: "images/photo-14.jpg" },
{
  id: 13,
  name: "Boat",
  image: "images/photo-13.jpg" },
{
  id: 12,
  name: "Flowers",
  image: "images/photo-12.jpg" },
{
  id: 11,
  name: "Fire",
  image: "images/photo-11.jpg" },
{
  id: 10,
  name: "Garden",
  image: "images/photo-10.jpg" },
{
  id: 9,
  name: "Flowers",
  image: "images/photo-9.jpg" },
{
  id: 8,
  name: "Fire",
  image: "images/photo-8.jpg" },
{
  id: 7,
  name: "Garden",
  image: "images/photo-7.jpg" },
{
  id: 6,
  name: "Fire",
  image: "images/photo-6.jpg" },
{
  id: 5,
  name: "Garden",
  image: "images/photo-5.jpg" },
{
  id: 4,
  name: "Fire",
  image: "images/photo-4.jpg" },
{
  id: 3,
  name: "Garden",
  image: "images/photo-3.jpg" },
{
  id: 2,
  name: "Garden",
  image: "images/photo-2.jpg" },
{
  id: 1,
  name: "Bridge",
  image: "https://aws-smiles.s3.amazonaws.com/photo-1.jpg" }];

