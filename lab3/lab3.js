import o3 from 'goss_proto';
const Prototypes = (object) => {
  const Recursion = (proto) => Object.getPrototypeOf(proto) ? `${proto.name}.${Recursion(Object.getPrototypeOf(proto))}` : proto.name;
  return Recursion(object).split('.');
}
console.log(Prototypes(o3['o3']));
