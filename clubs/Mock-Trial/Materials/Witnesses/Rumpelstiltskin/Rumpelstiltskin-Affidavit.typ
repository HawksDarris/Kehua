#set page(
  paper:"a4",
  margin:1in,
)

#set par(leading:2em)

#set document(title:[Affidavit of Rumpelstiltskin])
#align(center, text(17pt)[*Affidavit of Rumpelstiltskin*])
#v(2em)

#show raw: it => stack(dir: ttb, ..it.lines)
#show raw.line: it => {
  box(
    width: 100%,
    height: 1.75em,
    inset: 0.25em,
    fill: if calc.rem(it.number, 2) == 0 { luma(90%) } else { white },
    align(horizon, stack(
      dir: ltr,
      box(width: 15pt)[#it.number],
      it.body,
    ))
  )
}

My name is Rumpelstiltskin. I am 1,525 years old. I have a business, and I am my own boss. I can do something nobody else can do: I can turn straw into gold. However, I am very lonely. I have lived many years with no family and only a few friends. Because I can turn straw into gold, many people ask for my help, but what can they pay me with? Gold? I do not need gold! So I always ask for a different kind of payment. I always try to be fair and reasonable. 

I met Anne Miller when she scammed me #footnote[怀疑]. I think she was working together with the King to scam me into making a lot of gold for them. She was so rude! I thought she was only worried that the King would kill her father, but now I see she and the King were on the same team. After I finished working all night on the second night, before I left, I remember saying, "Sorry we have not really introduced ourselves yet, What is your name?" and she just said "Anne." and turned around. Extremely rude. She never even asked what my name was. Even though I was suspicious, I did not want her father to die, so I agreed to help her one more time. You have to understand: I have been alone for so long. To help her before her marriage, I asked her to give me her and the King's first baby so I could have a family, too. I just want someone to love. 

So, about one year later, Anne had a baby. I was so happy. I raced #footnote[\~1 week], I guess she asked my neighbor what my name was because she screamed "RUMPELSTILTSKIN!!! Now I don't have to give you my baby!" 

What? That is *NOT* what we agreed! Why would I agree to that? What a stupid thing to say. She never gave me my child. I have cried myself to sleep every night. I do not even have the energy to turn straw into gold now. I feel like Anne destroyed my life. So I paid a lawyer to sue her, and that is why I made wrote this statement. 


