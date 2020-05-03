type Opaque<A> = A & { readonly _: unique symbol };

export default Opaque;
